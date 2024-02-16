from flask import Flask, request, render_template
import openpyxl
app = Flask(__name__)
workbook = openpyxl.load_workbook("Login.xlsx")
worksheet = workbook.active


@app.route('/', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']
        data = [username, password]
        worksheet.append(data)
        workbook.save("Login.xlsx")
        print("Username:", username)
        print("Password:", password)
        return "Login successful"
    return render_template('LOGIN.html')


if __name__ == '__main__':
    app.run(debug=True)