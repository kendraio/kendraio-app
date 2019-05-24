export function maximumNumValidation(control, type) {
    const value = control.value;
  
    if (value) {
      const unMasked = parseInt(value.replace(/\D/g, ''), 10);
  
      if (unMasked > 10000) {
        return { maximumNumValidation: '' };
      }
    }
  
    return null;
  }

  export function passwordMatchValidation(control, type) {
    const value = control.value;
    // const value2 = control.root.password.value;
    return { passwordMatchValidation: 'test msg: 1' };
    // return value === value2
    //   // avoid displaying the message error when values are empty
    //   || (!value || !value2);
    // const value2 = control2.value;
  
   // return null;
  }
