/* lesson 15-16 */

'use strict';

$(function() {

  var hint = 'Hint: move mouse over the nickname',

      // compile templates
      tmpl = {
        users: _.template(users_tmpl.innerHTML),
        student: _.template(student_tmpl.innerHTML),
        worker: _.template(worker_tmpl.innerHTML)
      },

      $details = $('#user-details'),
      timerId,
      cache;

  $('#flash').flash(); // flash plugin setup

  $('#search-form').submit(function() {

    var $form = $(this),
        q = $form.find('input').val(),
        _t = performance.now();

    cache = {}; // clear users cache

    $.getJSON('https://api.github.com/search/users?q=' + q, function(data){
      data.elapsed = ((performance.now() - _t) / 1000).toFixed(2);
      if (hint) {
        $('header')
          .addClass('content')
          .append($form.detach().removeClass('center-block'));
        $.flash(hint, 10);
        hint = false;
      }
      $('main')
        .addClass('content')
        .html(tmpl.users(data))
        .on('mouseover mouseout', 'a.user__link', getDetails);
    });

    return false;

  });

  function getDetails(e) {

    clearTimeout(timerId);

    if (e.type == 'mouseout') {
      hideDetails();
    } else if (e.type == 'mouseover') {
      var self = this,
          url = self.getAttribute('data-url');
      timerId = setTimeout(function() {
        // github api limit: 60 requests per hour for unauthorized users
        // get user data from cache or server
        if (cache[url]) {
          __show();
        } else {
          $.getJSON(url, function(data){
            // create Human inheritor:
            // if 'company' property exist - create Worker
            // else Student
            data.name = data.name || data.login;
            // caching data
            cache[url] = data.company ? new Worker(data) : new Student(data);
            __show();
          });
        }
      }, 500);
    }

    function __show() { // wrapper
      console.info(cache[url]);
      showDetails.call(self, e, cache[url]);
    }

  }

  function showDetails(e, who) {
    // render
    $details.html(tmpl[who.template](who));
    // test: call class method
    who.learn();
    // calc position, up or down
    var h = parseInt($details.css('height'));
    if ((e.clientY + h) < window.innerHeight) {
      h = - 6;
    }
    $details.css({
      left: this.offsetLeft + this.offsetWidth + 10,
      top: this.offsetTop - h
    }).fadeIn();
  }

  function hideDetails() {
    $details.fadeOut();
  }

  // global ajax events
  $(document)
    .ajaxError(function(e, x) {
      var msg = 'Service not available: ' + x.statusText;
      if (x.responseText) msg += ' (' + x.responseText + ')';
      $.flash(msg, 10);
    });

});


/* simple flash plugin */
/** usage example:
  $('#flash').flash(); // setup
  $.flash('message', 2); // show message during 2 sec.
  $.flash('message'); // show message infinitely
  $.flash(); // close flash
*/
(function($) {
  $.fn.flash = function() {
    var self = this,
        timerId,
        content = this.find('span');
    this.find('.close').on('click', close);
    $.flash = function(msg, timeout) {
      clearTimeout(timerId);
      if (timeout) timerId = setTimeout(close, timeout * 1000);
      if (msg) {
        content.html(msg);
        self.fadeIn('slow');
      } else close();
    }
    function close() {
      clearTimeout(timerId);
      self.fadeOut('slow', function() {
        content.empty();
      });
    }
  }
})(jQuery);
/* end simple flash plugin */

/* class Human */
function Human(props) {
  this.name = props.name;
  this.age = props.age || 0;
  this.gender = props.gender || 'male';
  this.weight = props.weight || 3;
  this.skill = props.skill || 0;
}
/* end class Human */

/* class Student -> Human */
function Student(props) {
  Human.call(this, props);
  this.age = props.age || 18;
  this.weight = props.weight || 65;
  this.skill = props.skill || 5;
  this.institution = props.institution || '';
}

Student.prototype = Object.create(Human.prototype);
Student.prototype.constructor = Student;

Student.prototype.learn = function() {
  this.skill++;
}
Student.prototype.template = 'student';
/* end class Student -> Human */

/* class Worker -> Student -> Human */
function Worker(props) {
  Student.call(this, props);
  this.age = props.age || 26;
  this.weight = props.weight || 85;
  this.skill = props.skill || 10;
  this.company = props.company || '';
  this.location = props.location || '';
  this.email = props.email || '';
  this.created_at = props.created_at;
  this.updated_at = props.updated_at;
}

Worker.prototype = Object.create(Student.prototype);
Worker.prototype.constructor = Worker;

Worker.prototype.work = function() {
  this.skill++;
  this.skill++;
}
Worker.prototype.template = 'worker';
/* end class Worker -> Student -> Human */


/*** uncomment for test ***/
/*
var student, worker;

function create_student() {
  student = new Student({name: 'Vasya', institution: 'TRTU'});
  console.log(student);
}
function learn_student() {
  student.learn();
  console.log( student.name + ' учится, навык ' + student.skill );
}

function create_worker() {
  worker = new Worker({
    name: 'Petya',
    institution: 'KPI',
    location: 'Lviv',
    email: 'petya@gmail.com',
    company: 'Soft'
  });
  console.log(worker);
}
function learn_worker() {
  worker.learn();
  console.log( worker.name + ' учится, навык ' + worker.skill );
}
function work_worker() {
  worker.work();
  console.log( worker.name + ' работает, навык ' + worker.skill );
}
*/

// create_student()
// learn_student()

// create_worker()
// learn_worker()
// work_worker()
