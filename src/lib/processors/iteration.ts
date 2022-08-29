import { Welcome } from "@lib/intetions/welcome"

class Iteration {
    static async handle({ session, user, message }) {
        const intetion = this.getIntetion({ session, user })
        return intetion.process({ message })
    }

    static getIntetion({ session, user }) {
        if (!session || session.iterations.length == 0) {
            return new Welcome({ user })
        }
    }
}

export default Iteration