import { Injectable } from '@nestjs/common';
import { Password } from './models/Password';

@Injectable()
export class AppService {
  passwords: Password[] = [];
  ids = 0;

  /**
   * Get all passwords.
   */
  getPasswords(): Password[] {
    return this.passwords;
  }

  /**
   * Create password
   * @param password password data
   */
  createPassword(password: Password) {
    this.ids++;
    password.id = this.ids;
    this.passwords.push(password);
    return password;
  }

  /**
   * Delete password
   * @param id password ID
   */
  deletePassword(id: number) {
    this.passwords = this.passwords.filter((password) => password.id !== id);
  }

  /**
   * Update password data.
   * @param id password ID
   * @param passwordDataToPatch New password data
   */
  updatePassword(id: number, passwordDataToPatch: Password) {
    this.passwords = this.passwords.map((password) => {
      if (password.id === id) {
        passwordDataToPatch.id = id;
        password = passwordDataToPatch;
      }

      return password;
    });

    return passwordDataToPatch;
  }
}
