export const mixins = {
    methods: {
        showMessage({icon, messageCode}) {
            this.$swal({
                icon: icon,
                text: this.$t(messageCode),
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
        }
    }
}