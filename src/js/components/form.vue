<template>
  <div id="contact_form">
    <form>
      <p>Name:<input class="{ error: errors.has('name') }" type="text" v-validate="'required|alpha_num'" placeholder="John Doe" name="name" required>
      <span v-show="errors.has('name')" class="error"></span></p>
      <p>Email:<input class="{ error: errors.has('email') }" type="text" v-validate="'required|email'" name="email" required>
      <span v-show="errors.has('email')" class="error"></span></p>
      <p>Message:<input class="{ error: errors.has('messgae') }" type="text" v-validate="'requred|msg'" name="message" required>
      <span v-show="errors.hass('message')" class="error"></span></p>
      <input type="submit" value="Send">
    </form>
  </div>
</template>