<template>
    <b-row>
        <b-col lg="3" offset-lg="4">
            <b-form class="mt-5 login-form" @submit="login">
                <h3>{{$t('auth.login.header.title')}}</h3>
                <b-form-group
                    :label="$t('auth.login.form.username')"
                >
                    <b-form-input 
                        v-model="form.email"
                        :placeholder="$t('auth.login.form.username')"
                    />
                </b-form-group>
                <b-form-group
                    :label="$t('auth.login.form.password')"
                >
                    <b-form-input 
                        v-model="form.password"
                        type="password"
                        :placeholder="$t('auth.login.form.password')"
                    />
                </b-form-group>

                <b-button type="submit" class="btn-block" variant="dark">{{$t('auth.login.form.submit')}}</b-button>
            </b-form>
        </b-col>
    </b-row>
</template>

<script>
import {Meteor } from "meteor/meteor";

export default {
    name: "login",
    data() {
        return {
            form: {
                email: '',
                password: ''
            }
        }
    },
    methods: {
        login(e) {
            e.preventDefault();
            console.log("Submit is pressed");
            if(this.validate()) {
                Meteor
                Meteor.loginWithPassword(this.form.email, this.form.password, (err, data) => {
                    if(err) {
                        this.$swal({
                            icon: "error",
                            text: this.$t("auth.error_" + err.error),
                            toast: true,
                            position: "top-right",
                            timer: 2000,
                            showClass: {
                            popup: "animate__animated animate__fadeInDown"
                            },
                            hideClass: {
                            popup: "animate__animated animate__fadeOutUp"
                            },
                            showConfirmButton: false
                        });
                    }else {
                        this.$swal({
                            icon: "success",
                            text: this.$t("messages.success"),
                            toast: true,
                            position: "top-right",
                            timer: 2000,
                            showClass: {
                            popup: "animate__animated animate__fadeInDown"
                            },
                            hideClass: {
                            popup: "animate__animated animate__fadeOutUp"
                            },
                            showConfirmButton: false
                        });
                        this.$router.push('/home');
                    }
                });
            }
        },
        validate() {
            return true;
        }
    }
}
</script>

<style >

.login-form {
    border: 1px dotted #888;
    padding: 7px;
}
</style>