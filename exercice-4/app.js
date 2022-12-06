class Human {
    constructor (firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
    }
    toString() {
    return   this.firstName +' ' + this.lastName}
    }

    const donald = new Human ('Donald', 'Duck')
    console.log('Bonjour ' + donald )


    class Child extends Human {
        constructor(firstName, lastName, child){
            super(firstName, lastName);
            this.child = child;
            toString() {
                return   "Je m'apelle" + firstName + lastName + "et je suis en train de jouer"
                }

        
    }}