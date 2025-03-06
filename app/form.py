from flask_wtf import FlaskForm
from wtforms import StringField, EmailField
from wtforms.validators import InputRequired, Email


class Form(FlaskForm):
    email = EmailField("Email", validators=[InputRequired(), Email()])
    name = StringField("Name", validators=[InputRequired()])
    message = StringField("Message", validators=[InputRequired()])
