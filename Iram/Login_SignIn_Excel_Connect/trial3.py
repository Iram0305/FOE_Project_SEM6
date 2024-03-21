from flask import Flask, request, render_template
import openpyxl
app = Flask(__name__)
workbook = openpyxl.load_workbook("Sign Up.xlsx")
worksheet = workbook.active


@app.route('/', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        username = request.form['username']
        number = request.form['no']
        email = request.form['email']
        password = request.form['password']
        data = [username, number, email, [password]]
        worksheet.append(data)
        workbook.save("Sign Up.xlsx")
        print("Username:", username)
        print("Password:", password)
        return redirect("https://rzp.io/l/TL815e3")
    return render_template('SIGN_UP.html')


if __name__ == '__main__':
    app.run(debug=True)