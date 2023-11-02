const app = {
    data() {
        return {
            assignmentData: {
                name: 'Allyson West',
                course: 'N320 First Vue Assignment',
                dueDate: null,
                difficultyLevel: 3/5,
                completed: ''
            },
        };
    },

    methods: {
        setDueDate(event) {
            this.assignmentData.dueDate = event.target.value;
        }
    }
};

app.mount('#app');