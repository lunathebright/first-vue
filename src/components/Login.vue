<template>
  <div class="login">
    <h1>{{ message }}</h1>
    <form v-on:submit="onSubmit">
      <label>
        ID
        <input type="text" v-model="id" />
      </label>
      <label>
        Password
        <input type="password" v-model="password" />
      </label>
      <input type="submit" value="login" />
    </form>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      message: "Login Page",
      id: "",
      password: ""
    };
  },
  methods: {
    onSubmit(e) {
      e.preventDefault();
      console.log(this.id);
      console.log(this.password);
    }
  }
};
</script>

<style scoped></style>
