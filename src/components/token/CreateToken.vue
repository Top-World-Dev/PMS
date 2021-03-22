<template>
  <div>
    <b-overlay :show="show" rounded="sm">
      <h3>{{ $t("token.create") }}</h3>
      <b-form @submit="registerSerial($event)">
        <b-form-group id="input-group-0" label-for="input-0">
          <b-form-select
            id="input-0"
            :options="options"
            v-model="form.doctor"
          ></b-form-select>
        </b-form-group>
        <b-form-group id="input-group-1" label-for="input-1">
          <b-form-input
            id="input-1"
            v-model="form.first_name"
            type="text"
            required
            :placeholder="$t('token.patient_fname')"
          ></b-form-input>
        </b-form-group>
        <b-form-group id="input-group-2" label-for="input-2">
          <b-form-input
            id="input-1"
            v-model="form.last_name"
            type="text"
            required
            :placeholder="$t('token.patient_lname')"
          ></b-form-input>
        </b-form-group>
        <b-form-group id="input-group-3" label-for="input-3">
          <b-form-input
            id="input-2"
            v-model="form.phone"
            type="text"
            required
            :placeholder="$t('token.patient_mobile')"
          ></b-form-input>
        </b-form-group>
        <b-button
          type="submit"
          squared
          variant="outline-info"
          class="btn-block"
          >{{ $t("token.save") }}</b-button
        >
      </b-form>
    </b-overlay>
  </div>
</template>

<script>
import qrcode from "qrcode-generator";
import { Utils } from "../../utils";
import {Doctors} from "../../backend/collections";

const getDoctorsName = (item)=> {
  return (item.title + ' ' + item.first_name + " " + item.last_name).toUpperCase();
}

export default {
  name: "create-token",
  props: {
    displayToken: { default: false }
  },
  data() {
    return {
      form: {
        name: "",
        phone: "",
        doctor: null,
        date: new Date()
      },
      show: false
    };
  },
  mounted() {
    /**if (this.options && this.options.length) {
      this.form.doctor = this.options[0].value;
    }
    */
  },
  meteor: {
    $subscribe: {
      "doctors.all": []
    },
    options() {
      return Doctors.find({}).fetch().map((item)=> {
        return  {value: item._id, text: getDoctorsName(item)}
      });
    }
  },
  methods: {
    getName(obj) {
      console.log("GetName", obj);
    },
    registerSerial(e) {
      e.preventDefault();

      this.show = true;
      this.$store
        .dispatch("registerPatientToken", {
          first_name: this.form.first_name,
          last_name: this.form.last_name,
          phone: this.form.phone,
          doctor: this.form.doctor,
          date: this.form.date
        })
        .then(token => {
          console.log("Token", token);
          this.$swal({
            position: "top-end",
            icon: "success",
            showConfirmButton: false,
            text: this.$t("token.create_success"),
            toast: true,
            timer: 5000,
            showClass: {
              popup: "animate__animated animate__fadeInDown"
            },
            hideClass: {
              popup: "animate__animated animate__fadeOutUp"
            }
          });
          this.form.name = "";
          this.form.phone = "";
          this.waitToggle();

          if (this.displayToken) {
            this.displayTokenDetails(token);
          }
        })
        .catch(err => {
          this.waitToggle();
          this.$swal({
            icon: "error",
            text: this.$t("token.error_" + err.status),
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
        });
    },
    displayTokenDetails(tokenDetails) {
      var typeNumber = 4;
      var errorCorrectionLevel = "L";
      var qr = qrcode(typeNumber, errorCorrectionLevel);
      qr.addData("Token ID " + tokenDetails.token);
      qr.make();
      let dataUrl = qr.createDataURL(3, 2);

      this.$swal({
        icon: "success",
        imageUrl: dataUrl,
        imageWidth: 200,
        imageHeight: 200,
        showCancelButton: true,
        confirmButtonText: this.$t("token.button.confirm"),
        cancelButtonText: this.$t("token.button.cancel"),
        showClass: {
          popup: "animate__animated animate__fadeInDown"
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutUp"
        }
      }).then(success => {
        if (success.dismiss !== "cancel") {
          Utils.downloadURI(dataUrl, "Token.png");
        }
      });
    },
    waitToggle() {
      setTimeout(() => {
        this.show = !this.show;
      }, 1000);
    }
  },
  watch: {
    options(current, previous) {
      console.log("Current", previous);
    }
  }
};
</script>
