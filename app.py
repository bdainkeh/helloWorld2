from flask import Flask, render_template, request

app = Flask(__name__)


@app.route('/')
def hello_world():  # put application's code here
    return 'Hello World from Robert Smith! I am adding my first code change.'

@app.route('/hello')
def hello():
    return render_template('hello.html')

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/about-css')
def about_css ():
    return render_template('about-css.html')

@app.route('/greeting')
def greeting():
    return render_template('greeting.html')

@app.route('/favorite-course')
def favorite_course():
    subject = (request.args.get('subject') or '').strip()
    course_number = (request.args.get('course_number') or '').strip()
    has_params = bool(subject and course_number)
    return render_template(
        'favorite-course.html',
        subject=subject,
        course_number=course_number,
        has_params=has_params
    )

@app.route('/contact', methods=['GET', 'POST'])
def contact():
    if request.method == 'POST':
        data = {
            'first_name': (request.form.get('first_name') or '').strip(),
            'last_name': (request.form.get('last_name') or '').strip(),
            'email': (request.form.get('email') or '').strip(),
            'message': (request.form.get('message') or '').strip(),  # 4th field
        }
        return render_template('contact.html', submitted=True, **data)
    return render_template('contact.html', submitted=False)

if __name__ == '__main__':
    app.run()
