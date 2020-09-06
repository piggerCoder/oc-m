export default {
    name: "",
    data() {
        return {
            mailbox: "",
            password: "",
        };
    },
    mounted() {
        this.init();
    },
    methods: {
        init() {
            this.mailbox = getLocal("mailbox") || "";
            this.password = getLocal("password") || "";
        },
        async login() {
            let mailbox = this.mailbox,
                password = this.password;
            if (!mailbox) {
                this.Toast.fail("邮箱不可为空");
                return;
            }
            if (!password) {
                this.Toast.fail("密码不可为空");
                return;
            }
            let data = {
                mailbox: this.mailbox,
                password: this.password,
            };
            const res = await this.$_api.login(data);
            if (res.code == 200) {
                this.$router.push("/");
            } else {
                this.Toast.fail(res.data);
            }
        },
    },
};