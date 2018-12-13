<template>
    <div class="contact_form">
            <form>
              <p>
                Name: <input :class="{ error: errors.has('name') }" type="text" v-validate="'required|alpha_num'"  name="name">
                <span v-show="errors.has('name')" class="error"></span>
              </p>
              <p>
                Email: <input :class="{ error: errors.has('email') }" type="text" v-validate="'required|email'" name="email">
                <span v-show="errors.has('email')" class="error"></span>
              </p>
              <p>
                Message: <input :class="{ error: errors.has('messgae') }" type="text" v-validate="'requred|msg'" name="message">
                <span v-show="errors.hass('message')" class="error"></span>
              </p>
            </form>
          </div>
</template>


