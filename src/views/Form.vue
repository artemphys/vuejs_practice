<template>
  <div class="formContainer">
    <form @submit.prevent="handleSubmit">
      <label>Email:</label>
      <input type="email" required v-model="email" />

      <label>Password:</label>
      <input type="password" required v-model="password" />
      <div class="error" v-if="passwordError.length">{{ passwordError }}</div>

      <label>Role: </label>
      <select v-model="role">
        <option value="developer">Web Developer</option>
        <option value="designer">Web Designer</option>
      </select>

      <label>Skills:</label>
      <input type="text" v-model="tempSkill" @keyup.alt="addSkill" />
      <div v-for="skill in skills" :key="skill" class="pill">
        <span @click="deleteSkill(skill)">{{ skill }}</span>
      </div>

      <div>
        <input type="checkbox" required v-model="terms" />
        <label>Accept terms and conditions</label>
      </div>

      <div class="submit">
        <button>Create an account</button>
      </div>
    </form>
    <div v-if="false">
      // How to use v-model
      <div>
        <input type="checkbox" required value="alex" v-model="names" />
        <label>Alex</label>
      </div>
      <div>
        <input type="checkbox" required value="paul" v-model="names" />
        <label>Paul</label>
      </div>
      <div>
        <input type="checkbox" required value="joe" v-model="names" />
        <label>Joe</label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FormComponent',
  data() {
    return {
      email: '',
      password: '',
      role: '',
      terms: false,
      names: [],
      tempSkill: '',
      skills: [],
      passwordError: ''
    }
  },
  methods: {
    addSkill(e) {
      if (e.key === ',' && this.tempSkill) {
        if (!this.skills.includes(this.tempSkill)) {
          this.skills.push(this.tempSkill)
        }

        this.tempSkill = ''
      }
    },
    deleteSkill(skill) {
      this.skills = this.skills.filter((item) => item !== skill)
    },
    handleSubmit() {
      this.passwordError = this.password.length > 5 ? '' : 'Password must be at least 5 chars long'

      if (!this.passwordError) {
        console.info('User registered! Email:', this.email)
      }
    }
  }
}
</script>

<style scoped>
.formContainer {
  max-width: 450px;
  margin: 50px;
}
form {
  max-width: 420px;
  margin: 30 auto;
  background: white;
  text-align: left;
  padding: 40px;
  border: 1px solid #ddd;
  border-radius: 10px;
}
label {
  color: #aaa;
  display: inline-block;
  margin: 25px 0 15px;
  font-size: 0.6em;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
}
input,
select {
  display: block;
  padding: 10px 6px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid #ddd;
  color: #555;
}
input[type='checkbox'] {
  display: inline-block;
  width: 16px;
  margin: 0 10px 0 0;
  position: relative;
  top: 2px;
}
.pill {
  display: inline-block;
  margin: 20px 10px 0 0;
  padding: 6px 12px;
  background: #eee;
  border-radius: 20px;
  font-size: 12px;
  letter-spacing: 1px;
  font-weight: bold;
  color: #777;
  cursor: pointer;
}
button {
  background: #0b6dff;
  border: 0;
  padding: 10px 20px;
  margin-top: 20px;
  color: white;
  border-radius: 20px;
}
.submit {
  text-align: center;
}
.error {
  color: #ff0062;
  margin-top: 10px;
  font-size: 0.8em;
  font-weight: bold;
}
</style>
