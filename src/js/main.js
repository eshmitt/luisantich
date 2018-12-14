// import styles, files and contact form
import '../sass/main.scss';
import Vue from 'vue';
import VeeValidate from'vee-valitdate';
import form from 'js/compentents/form.vue';
import '../index.html';
import '../about.html';
import '../contact.html';
import '../nature.html';
import '../people.html';
import '../travel.html';
import '../work.html';

Vue.use(VeeValidate);
Vue.compnent('contact_form', form);

const form = new Vue ({
    el: '#contact_form',
})

function toggleNav() {
    // call the nav
    let nav = doument.getElementById("nav");
    // call the nav as menu item clicked
    document.getElementById.onclick = function() {
    nav.style.display = "block";
    };
    // call exit to close nav
    let exit = document.getElementById("exit")[0];
    exit.onclick = function() {
        nav.style.display = "none";
    };
}

function toggleImg() {
    // call the img overlat
    let img = document.getElementById("img_overlay");
    // call the img once clicked
    document.getElementById.onclick = function() {
        
    }
}

window.onload(click());

function validateForm () {
    var name = document.forms["contactForm"]["name"].value;
    if (name == "") {
        alert("This is required");
        return false;
    }
    var email = document.forms["contactForm"]["email"].value;
    if (email == "") {
        alert("This is required");
        return false;
    }
    var message = document.forms["contactForm"]["message"].value;
    if (message == "") {
        alert("This is required");
        return false;
    }
}
