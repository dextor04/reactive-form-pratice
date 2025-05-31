import { AbstractControl, FormControl } from '@angular/forms';

// this is a function
// export const noSpaceAllowed = (control: FormControl) => {
//   if (control.value != null && control.value.indexOf(' ') != -1) {
//     return { noSpaceAllowed: true };
//   }
//   return null;
// };
// this is a method
export class customValidators {
  static noSpaceAllowed(control: FormControl) {
    if (control.value != null && control.value.indexOf(' ') != -1) {
      return { noSpaceAllowed: true };
    }
    return null;
  }
  static checkUserName(control: AbstractControl): Promise<any> {
    return userNameAllowed(control.value);
  }
}
export function userNameAllowed(userName: string) {
  const takenUserName = ['admin', 'user'];
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (takenUserName.includes(userName)) {
        resolve({ checkUserName: true });
      } else {
        resolve(null);
      }
    }, 5000);
  });
}
