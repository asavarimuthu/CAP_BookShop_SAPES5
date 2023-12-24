using {SEPMRA_PROD_MAN as sep} from './external/SEPMRA_PROD_MAN.csn';


service SEPMRA_PROD_MANService {

    @readonly
    entity SEPMRA_I_PriceClassification as projection on sep.SEPMRA_I_PriceClassification;

}
