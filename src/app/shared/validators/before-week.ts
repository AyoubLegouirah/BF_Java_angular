import { ValidatorFn, AbstractControl } from '@angular/forms';

export const beforeWeek = (): ValidatorFn | null => {

  const oneWeekInMilliseconds = 7 * 24 * 60 * 60 * 1000;

  return (control: AbstractControl) => {
    if (!control || !control.value) {
      return null;
    }

    let currentDate: Date = new Date();
    let inputDate: Date = new Date(control.value);

    const dateWithOneWeek = new Date(currentDate.getTime() + oneWeekInMilliseconds);

    if (inputDate >= dateWithOneWeek) {
      return null;
    }

    return { beforeWeek: true };
  };
};
