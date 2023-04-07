$(document).ready(function(){
    answers = ["Kasym-Zhomart", "Ronaldo", "18mln","8.5mln","15.5mln"];
    questions = ["President of Kazakhstan?","Who has the highest number of followers on Instagram?","Population of Kazakhstan?","Population of New York city?","Papulation of Istambul?"]
    choice_options = [["Nursultan","Kasym-Zhomart","Adai","Beibarys"],["Ronaldo","Messi","Rihanna","Ariana"],["19mln","18mln","17mln","16mln"],["9mln","8.5mln","7mln","6mln"],["1mln","8mln","17mln","15.5mln"]]

    quizBox = $("#quiz-box");
    quizBox.append ("<div class='question1'>");

    $('.question1').append ("<p class='d'> Q1. "+ questions[0]+"</p>")
    $('.question1').append ("<label><input type='radio' name='q1' value='a'>"+choice_options[0][0]+"</label>"+
                             "<label><input type='radio' name='q1' value='a'>"+choice_options[0][1]+"</label>"+
                             "<label><input type='radio' name='q1' value='a'>"+choice_options[0][2]+"</label>"+
                             "<label><input type='radio' name='q1' value='a'>"+choice_options[0][3]+"</label>")

    quizBox = $("#quiz-box");
    quizBox.append ("<div class='question2'>");
    $('.question2').append ("<p class='d'> Q2. "+ questions[1]+"</p>")
    $('.question2').append ("<label><input type='radio' name='q2' value='a'>"+choice_options[1][0]+"</label>"+
                            "<label><input type='radio' name='q2' value='a'>"+choice_options[1][1]+"</label>"+
                            "<label><input type='radio' name='q2' value='a'>"+choice_options[1][2]+"</label>"+
                            "<label><input type='radio' name='q2' value='a'>"+choice_options[1][3]+"</label>")

    quizBox = $("#quiz-box");
    quizBox.append ("<div class='question3'>");
    $('.question3').append ("<p class='d'> Q3. "+ questions[2]+"</p>")
    $('.question3').append ("<label><input type='radio' name='q3' value='a'>"+choice_options[2][0]+"</label>"+
                            "<label><input type='radio' name='q3' value='a'>"+choice_options[2][1]+"</label>"+
                            "<label><input type='radio' name='q3' value='a'>"+choice_options[2][2]+"</label>"+
                            "<label><input type='radio' name='q3' value='a'>"+choice_options[2][3]+"</label>")

    quizBox = $("#quiz-box");
    quizBox.append ("<div class='question4'>");
    $('.question3').append ("<p class='d'> Q4. "+ questions[3]+"</p>")
    $('.question3').append ("<label><input type='radio' name='q4' value='a'>"+choice_options[3][0]+"</label>"+
                            "<label><input type='radio' name='q4' value='a'>"+choice_options[3][1]+"</label>"+
                            "<label><input type='radio' name='q4' value='a'>"+choice_options[3][2]+"</label>"+
                            "<label><input type='radio' name='q4' value='a'>"+choice_options[3][3]+"</label>")

    quizBox = $("#quiz-box");
    quizBox.append ("<div class='question5'>");
    $('.question3').append ("<p class='d'> Q5. "+ questions[4]+"</p>")
    $('.question3').append ("<label><input type='radio' name='q5' value='a'>"+choice_options[4][0]+"</label>"+
                            "<label><input type='radio' name='q5' value='a'>"+choice_options[4][1]+"</label>"+
                            "<label><input type='radio' name='q5' value='a'>"+choice_options[4][2]+"</label>"+
                            "<label><input type='radio' name='q5' value='a'>"+choice_options[4][3]+"</label>")
    countCorrect = 0;
    reset=true

    $("button").click (function (event){

      i=0
      while (i<5){
        $('input[name=q' + (i+1) + ']').each (function (index){
               choice = $(this).parent().text();
               if ($( this ).prop("checked") == true && answers [i] == choice){
                    countCorrect += 1;
               }
        });
        i++
      }


      $("#quiz-box").append ("<h2>Result of the quiz is: " + countCorrect + "</h2>");

      if (reset){
        countCorrect = 0;

      }



    });


});
