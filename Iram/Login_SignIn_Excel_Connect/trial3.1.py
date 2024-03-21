from flask import Flask, request, render_template, redirect
import openpyxl

app = Flask(__name__)
workbook = openpyxl.load_workbook("Sign Up.xlsx")
worksheet = workbook.active

@app.route('/', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']
        email = request.form['email']
        date = request.form['date']
        number = request.form['number']
        confirm_password = request.form['confirmPassword']
        data = [username, password, confirm_password, email, date, number]
        worksheet.append(data)
        workbook.save("Sign Up.xlsx")
        print("Username:", username)
        print("Password:", password)
        return redirect("https://rzp.io/l/TL815e3")
    return render_template('SIGN_UP.html')

if __name__ == '__main__':
    app.run(debug=True)