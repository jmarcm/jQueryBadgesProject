$(function() {

  $.ajax({
      url: "https://www.codeschool.com/users/jmarcm.json",
      dataType: "jsonp",
      success: function(response) {
          showCourses(response.courses.completed);

      }
  });


  function showCourses(coursesCompleted) {

      $.each(coursesCompleted, function(i, courseCompleted) {
          var $div = $("<div>", {class: "course"}).appendTo("#badges");

          $("<h3>", {
              html: courseCompleted.title
          }).appendTo($div);

          $("<img>", {
              src: courseCompleted.badge
          }).appendTo($div);

          $("<a>", {
              href: courseCompleted.url,
              target: "_blank",
              class: "btn btn-primary",
              text: "See course"
          }).appendTo($div);
      });
  }

});
