
# passwordGenerator

- A simple password generator that randomizes characters based on parameters provided by the user.



## Installation

Install my project via git bash

Use "Git Clone git@github.com:Tehseus/passwordGenerator.git" to pull down repository

Link to repository: https://github.com/Tehseus/passwordGenerator

Link to deployed app: https://tehseus.github.io/passwordGenerator/

    
## Screenshots

![App Screenshot](https://github.com/Tehseus/passwordGenerator/blob/main/assets/images/example_screenshot.PNG)


## Features

- The user is presented with a large red button to generate a password.
- Initial prompt to user is to give password length.
- The password length prompt has validation for user input( 8 characters or more, 128 characters or less, and has to be an integer.)
- If the user does not select a valid response they are greeted with an alert asking them to follow instructions.
- The first confirm asks the user if they would like to use lowercase letters.
- The Second confirm asks the user if they would like to use uppercase letters.
- The third confirm asks the user if they would like to use numbers.
- The fourth confirm asks the user if they would like to include special characters.
- The password generator then validates that the user selected at least one criteria.
- The user is then greeted with an alert if they selected nothing, asking them yet again to follow instructions.
- If the user selected none above criteria they then have to push the generate password button again and start over.
- If the user successfully selected criteria and a valid number between 8-128 characters, a password is generated in the text field.
- If the user hits the generate password button the field should then be cleared of the previous password.


## License

[MIT](https://choosealicense.com/licenses/mit/)

