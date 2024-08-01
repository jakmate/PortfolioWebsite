from flask import Flask
from flask_mail import Mail
from flask_wtf.csrf import CSRFProtect

app = Flask(__name__)
app.config.from_object('config')
mail = Mail(app)
csrf = CSRFProtect(app)

app.app_context().push()

from app import views