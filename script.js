let questionAnswered = false;
let score = 0;
let questions_left = 0;


//Elements
document.addEventListener('DOMContentLoaded', () => {


  //widget_html = render_view("#post_view1");

  //document.querySelector("#app_widget").innerHTML = widget_html;

  create_main_view(1)

  document.querySelector("#app_widget").onclick = (e) => {
    handle_vote(e)
  }

});

const create_main_view = async (q_index) => {
  const data = await fetch('https://my-json-server.typicode.com/Lu-Bell/QuizApi/db')
  const model = await data.json()
  const html_ele = render_view(model, '#post_view1')
  document.querySelector("#app_widget").innerHTML = html_ele;
}

const create_question_view = async (q_index) => {
  const data = await fetch('https://my-json-server.typicode.com/Lu-Bell/QuizApi/db')
  const model = await data.json()
  const html_ele = render_view(model, '#quiz_view')
  document.querySelector("#app_widget").innerHTML = html_ele;
}


const render_view = (model, view) => {
  template_source = document.querySelector(view).innerHTML

  var template = Handlebars.compile(template_source);

  console.log(model)

  var html_ele = template(model)
  console.log(html_ele)

  return html_ele
}

const handle_vote = (e) => {
    if (e.target.dataset.vote == "python")
    {
      console.log("py")
      create_question_view(1)
    } else if (e.target.dataset.vote == "java")
    {
      console.log("jav")
      create_question_view(1)
    }
  }

function loadQ ()
{
  var choice1 = document.getElementById('choice1');

  if(e.target.dataset.number == 'choice1')
  {
    score++;
    console.log(score);
  }
}

/*
async function getdata(){
  const response = await fetch('https://my-json-server.typicode.com/Lu-Bell/QuizApi/PymultipleChoice');
  const data = await response.json(); 
   console.log(data);
}
*/











/*
API

const python_view = async(user_inx) => {
    const data = await fetch("http://localhost:3000/Results")
    const model = await data.json()
    const html_ele = render_widget(model, "#user_view")
    document.querySelector("#app_widget").innerHTML = html_ele;
}
*/