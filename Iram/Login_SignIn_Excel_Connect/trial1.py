from flask import Flask, request, render_template

app = Flask(__name__)


@app.route('/', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']
        print("Username:", username)
        print("Password:", password)
        return "Login successful"
    return render_template('sign up.html')


if __name__ == '__main__':
    app.run(debug=True)