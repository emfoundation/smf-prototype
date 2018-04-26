import Vue from 'vue'

/* Custom global filters, for component filters, use the filters: {} in the components options */

// Capitalise the first letter of a string
Vue.filter('capitalise', function (str) {
    if (!str) return ''
    str = str.toString()
    return str.charAt(0).toUpperCase() + str.slice(1)
})

// String to kebab 
// https://gist.github.com/thevangelist/8ff91bac947018c9f3bfaad6487fa149
Vue.filter('kebab', function (str) {
    return str.replace(/([a-z])([A-Z])/g, '$1-$2').replace(/\s+/g, '-').toLowerCase()
})