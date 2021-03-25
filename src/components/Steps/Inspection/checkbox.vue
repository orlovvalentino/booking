<template>
  <label class="wrapper flex items-center">
    {{ label }}
    <input class="checkbox" type="checkbox" :checked="isChecked" :value="value" @change="updateInput"/>
    <span class="checkmark">
      <svg width="14" height="11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 10.5L0 5.702l1.41-1.354L5 7.784 12.59.5 14 1.863 5 10.5z" fill="#fff"/></svg>
    </span>
  </label>
</template>

<script>
export default {
  model: {
    prop: 'modelValue',
    event: 'change'
  },
  props: {
    "value": {type: String},
    "modelValue": {default: ""},
    "label": {type: String},
    "trueValue": {default: true},
    "falseValue": {default: false}
  },
  computed: {
    isChecked() {
      if (this.modelValue instanceof Array) {
        return this.modelValue.includes(this.value)
      }
      // Note that `true-value` and `false-value` are camelCase in the JS
      return this.modelValue === this.trueValue
    }
  },
  methods: {
    updateInput(event) {
      let isChecked = event.target.checked
      if (this.modelValue instanceof Array) {
        let newValue = [...this.modelValue]
        if (isChecked) {
          newValue.push(this.value)
        } else {
          newValue.splice(newValue.indexOf(this.value), 1)
        }
        this.$emit('change', newValue)
      } else {
        this.$emit('change', isChecked ? this.trueValue : this.falseValue)
      }
    }
  }
}
</script>

<style lang="postcss" scoped>
/* Customize the label (the wrapper) */
.wrapper {
  display: block;
  position: relative;
  cursor: pointer;
  user-select: none;

}

/* Hide the browser's default checkbox */
.wrapper input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

/* Create a custom checkbox */
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 20px;
  width: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: border-color .25s;
  border: 1px solid #b6b6b6;
}

/* On mouse-over, add a grey background color */
.wrapper:hover input ~ .checkmark {
  border-color: #c3002f;
}

/* When the checkbox is checked, add a blue background */
.wrapper input:checked ~ .checkmark {
  background-color: #C3002F;
}

/* Show the checkmark when checked */
.wrapper input:checked ~ .checkmark:after {
  display: block;
}

/* Style the checkmark/indicator */
.wrapper .checkmark:after {
  left: 7px;
  top: 0px;
  width: 7px;
  height: 15px;
  border: solid white;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
</style>