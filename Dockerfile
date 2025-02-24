FROM python:3.12-slim

# Set environment variables to prevent Python from writing .pyc files and buffering stdout/stderr.
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

# Set the working directory in the container.
WORKDIR /app

# Copy the requirements file into the container.
COPY requirements.txt .

# Upgrade pip and install dependencies.
RUN pip install --upgrade pip && pip install -r requirements.txt

# Copy the application code.
COPY . .

# Set the Flask app environment variable
ENV FLASK_APP=app.py
# Set Flask to run in development mode
ENV FLASK_ENV=development

# Expose the port that Flask runs on.
EXPOSE 5000

# Run the application.
CMD ["flask", "run", "--host=0.0.0.0"]
