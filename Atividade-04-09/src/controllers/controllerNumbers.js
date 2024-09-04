module.exports = class teacherController{
    //Cadastro de professor 
    static async postTeacher(req,res){
        const {numero} = req.body;
        if(numero % 2 === 0){
            res.status(400).json({message:'Numero e par'});
        }
        else{
            res.status(200).json({message: "Numero nao e par"});
        }

    }
    static async postTeacher(req,res){
        const {numero2} = req.body;
        if(numero2 % 2 === 0){
            res.status(200).json({message:'Numero e par'});
        }
        else{
            res.status(400).json({message: "Numero nao e par"});
        }

    }
    //Listar professsor 
    static async getTeacher(req,res){
        res.status(200).json({nome: "Joao"})

    }
};