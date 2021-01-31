const stringMatcher = {
  hasNumber: function (str) {
    return /\d/.test(str)
  },
  onlyNumbers: function (str) {
    return /^[0-9]*$/.test(str)
  },
}

export default stringMatcher
