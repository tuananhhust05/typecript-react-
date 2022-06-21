const client = require('../../../utils/postgre_connection')
client.connect(); // phải connect db 

class NFTController {

    async index(req, res, next) {
        let nfts = await client.query(`Select * from list_nft`);
        var data_postgre_array = nfts.rows;
        client.end;
        
        res.json({
            message: "success",
            statusCode: "200",
            data: data_postgre_array
        })
    }
    // create action
    async takedata(req, res, next) {
        var a = req.params.slug;

        // lấy data của khóa học từ db 
        let json_db = await client.query(`Select * from public."infomation_cource " where link_access='` + a + `'`);
        const json = json_db.rows[0].data_cource; // lấy data 

        // lấy data quản lý 
        let json_db_manage = await client.query(`Select * from public.manage_information_cource where link_access='` + a + `'`);
        const json_manage = json_db_manage.rows[0].information_manage;


        let course = await client.query(`Select * from list_nft where link_access='` + a + `'`);
        var data_postgre_array = course.rows;
        const data_postgre = data_postgre_array[0];
        const abi =data_postgre.abi.abi;
        const address_product=data_postgre.address;
        client.end;
        res.json({
            json: json,
            abi:abi,
            address:address_product,
            json_manage: json_manage
        });
    }
    
    // data order 
    async take_data_myorder (req,res,next){

        console.log(req.params.acc.toLowerCase());
        //0x94D08B9d4b49D1cc33B72A384d46646E28054881 => Trong db nó lưu chữ thường => Trc khi add data vào db thì chuyển hết sang chữ thường 
        let data_order = await client.query(`Select * from public.myorder where address_user='`+req.params.acc.toLowerCase()+`'`); 
                                             
        res.json( {
            data_order_array: data_order.rows 
        });
    }

    // resgister order 
    async register_order (req,res,next){
        console.log(req.body); // cài middleware để sử dụng truyền data thông qua req.body 
        // phòng cường độ kết nối không đảm bảo, ta chia làm 2 case 
        if ((req.body.account != null) && (req.body.link != null) && (req.body.image != null) && (req.body.name_product != null) && (req.body.name_author != null) && (req.body.price != null)) {
            let add = await client.query(`INSERT INTO public.myorder(
                                        link_course, address_user, name_product, name_author, link_image, price)
                                        VALUES ('${req.body.link}', '${req.body.account}', '${req.body.name_product}', '${req.body.name_author}', '${req.body.image}', '${req.body.price}')`);
            client.end;

            res.json('Thêm thành công, bạn đăng ký mua để truy cập vào khóa học nhé!');
        } else {
            client.end;
            res.json('Thêm thất bại');
        }
    }
}
module.exports = new NFTController;