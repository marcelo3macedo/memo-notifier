import messenger from "@constants/messenger"

class Messenger {
    static getValue(key, variables=null) {
        let value = this.getObjectProperty(messenger.default, key)
        if (!variables) {
          return value
        }
        
        variables.forEach(v => {
            let re = new RegExp(`{{${v.key}}}`,"gi");
            value = value.replace(re, v.value) 
        });

        return value
    }

    static getObjectProperty(object, path) {
        if (object == null) {
          return object;
        }
        const parts = path.split('.');
        
        for (const element of parts) {
            if (object == null) {
              return undefined;
            }

            const key = element;
            object = object[key];
        }
        return object;
  };
}

export default Messenger