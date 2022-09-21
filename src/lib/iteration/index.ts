import { ITERATION_MENU, ITERATION_EXIT, ITERATION_WELCOME } from "@constants/iteration"
import messenger from "@constants/messenger"

class Iteration {
  static getProvider({ session, message }) {
    const reservedKeyword = this.reservedKeyword(message)
    if (reservedKeyword) {
      return reservedKeyword
    }

    if (!session || !session.iterations || session.iterations.length == 0) {
      return ITERATION_WELCOME
    }

    const next = session.iterations.filter(i => { return i.id === session.nextId })
    if (!next || next.length == 0) {
        return
    }

    return next[0].type
  }

  static reservedKeyword(message) {
    const preparedMessage = message.toLowerCase()

    if (messenger.default.keywords.menu.split(',').includes(preparedMessage)) {
      return ITERATION_MENU
    }

    if (messenger.default.keywords.sair.split(',').includes(preparedMessage)) {
      return ITERATION_EXIT
    }
  }
}

export default Iteration