/**
 * Created by lucas on 16/05/2017.
 */
export  class User {

    public $key: string;

    constructor(
        public nome: string,
        public nomeusuario: string,
        public email: string,
        public photo: string
    ){}

}
