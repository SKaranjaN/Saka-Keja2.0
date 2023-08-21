from flask import Flask, request
import requests
from requests.auth import HTTPBasicAuth
from datetime import datetime
import base64
# import hashlib

app = Flask(__name__)
my_endpoint = 'https://f299-102-176-183-205.ngrok-free.app'
# @app.route('/')
# def index():
#     # getAccessToken()
#     return 'testing'
@app.route('/payments', methods=["POST"])
def MpesaExpress():
    amount = request.args.get('amount')
    phoneNumber = request.args.get('phoneNumber')
    print(phoneNumber)
    endpoint = 'https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest'
    access_token = getAccessToken()
    headers = { "Authorization": "Bearer %s" % access_token }
    Timestamp = datetime.now()
    times = Timestamp.strftime("%Y%m%d%H%M%S")
    password_str = "174379" + "bfb279f9aa9bdbcf158e97dd71a467cd2e0c893059b10f78e6b72ada1ed2c919" + times
    password_bytes = password_str.encode('utf-8')
    password = base64.b64encode(password_bytes).decode('utf-8')
    # password = hashlib.sha1(password_bytes).hexdigest()
    data = {
        "BusinessShortCode": "174379",
        "Password": password,
        "Timestamp": times,
        "TransactionType": "CustomerPayBillOnline",
        "PartyA": phoneNumber,
        "PartyB": "174379",
        "PhoneNumber":phoneNumber,
        "CallBackURL": my_endpoint + '/lnmo-callback',
        "AccountReference": "TestPay",
        "TransactionDesc": "HelloTest",
        "Amount": amount
    }
    res = requests.post(endpoint, json=data, headers=headers)
    print(res)
    return res.json()
@app.route('/lnmo-callback', methods=['POST'])
def incoming():
    data = request.get_json()
    print(data)
    print("ok")
    return 'ok'
def getAccessToken():
    consumer_key = "gI5C4GFFGx0bUERCDnTD4SfPElfNFnnG"
    consumer_secret = "VM4pW3T6MdA36J1V"
    endpoint = 'https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials'
    r = requests.get(endpoint, auth=HTTPBasicAuth(consumer_key, consumer_secret))
    data = r.json()
    print(data)
    return data['access_token']
if __name__ == '__main__':
    app.run(port=5555, debug=True)
#paste it chrome:
    # http://127.0.0.1:5555/pay?phoneNumber=254796604821&amount=1