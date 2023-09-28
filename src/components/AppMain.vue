<script>
import axios from 'axios';
export default {
    data() {
        return {
            options: {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer 74ec4e13e23b08e73924c0a4a6ae2702'
                }
            }
        }
    },
    created() {
        axios.get('https://api.themoviedb.org/3/authentication', this.options)
            .then(response => {
                console.log(response)
            })
            .catch(err => console.error(err));
    }
}
</script>


<template></template>
