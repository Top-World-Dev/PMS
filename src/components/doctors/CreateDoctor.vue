<template>
    <div>
        <b-button :id="'modal_'+id" @click="$bvModal.show(id)" size="lg" variant="info" class="mb-2">
            <span v-if="!doctor">{{$t('doctors.create.buttons.create')}}</span>
            <span v-else>Edit</span>
        </b-button>

        <b-modal 
            ref="createDoctorModal"
            :id="id" 
            :title="$t('doctors.create.title')"
            :static="true"
            :no-close-on-backdrop="true"
            :no-close-on-esc="true"
            size="lg"
            :hide-footer="true"
            header-bg-variant="info"
            header-text-variant="light"
            header-close-variant="light"
            @hide="resetForm"
            >
            <b-overlay :show="show" rounded="sm">
                <b-form @submit="saveDoctor">
                    <b-form-group
                        :label="$t('doctors.create.form.title')"
                    >
                        <b-form-input
                            type="text"
                            v-model="form.title"
                            :required="true"
                        />
                    </b-form-group>

                    <b-form-group
                        :label="$t('doctors.create.form.first_name')"
                    >
                        <b-form-input
                            type="text"
                            v-model="form.first_name"
                            :required="true"
                        />
                    </b-form-group>

                    <b-form-group
                        :label="$t('doctors.create.form.last_name')"
                    >
                        <b-form-input
                            type="text"
                            v-model="form.last_name"
                            :required="true"
                        />
                    </b-form-group>

                    <b-form-group
                        :label="$t('doctors.create.form.age')"
                    >
                        <b-form-input
                            type="text"
                            v-model="form.age"
                            :required="true"
                        />
                    </b-form-group>

                    <b-button variant="danger" type="button" @click="resetForm">{{$t('doctors.create.buttons.reset')}}</b-button>
                    <b-button variant="info" type="submit">{{$t('doctors.create.buttons.save')}}</b-button>
                </b-form>
            </b-overlay>
        </b-modal>
    </div>
</template>

<script>
import {Meteor} from "meteor/meteor";
import {mixins} from "../../ui/mixins";

export default {
    name: "create-doctor",
    mixins: [mixins],
    props: ["doctor", "id", "edit"],
    mounted() {

        if(this.doctor) {
            
            this.form = {
                id: this.doctor._id,
                title: this.doctor.title,
                first_name: this.doctor.first_name,
                last_name: this.doctor.last_name,
                age: this.doctor.age
            };
        }

        if(this.edit) {
            this.edit();
        }
    },
    data() {
        return {
            form: {
                id: null,
                first_name: '',
                last_name: '',
                age: ''
            },
            show: false
        };
    },
    methods: {
        saveDoctor(e) {
            e.preventDefault();
            
            this.show = true

            Meteor.call("doctors.insert", this.form, 
                (err, data) => { 
                    this.show = false;
                    if(!err) {
                       this.showMessage({icon: "success", messageCode: "doctors.messages.create_success"});
                       this.resetForm();
                    }else {
                        this.showMessage({icon: "error", messageCode: "doctors.messages.create_error"});
                    }
                });
            
            
        },
        resetForm() {
            
            
            if(!this.doctor) {
                this.form = {
                    first_name: '',
                    last_name: '',
                    age: ''
                };
            }
            this.show = false;
            this.$bvModal.hide(this.id);

        }
    }
}
</script>