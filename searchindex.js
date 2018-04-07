Search.setIndex({docnames:["api/modules","api/ocrd","api/ocrd.cli","api/ocrd.model","api/ocrd.processor","api/ocrd.processor.recognize","api/ocrd.processor.segment_line","api/ocrd.processor.segment_region","api/ocrd.webservice","index"],envversion:53,filenames:["api/modules.rst","api/ocrd.rst","api/ocrd.cli.rst","api/ocrd.model.rst","api/ocrd.processor.rst","api/ocrd.processor.recognize.rst","api/ocrd.processor.segment_line.rst","api/ocrd.processor.segment_region.rst","api/ocrd.webservice.rst","index.rst"],objects:{"":{ocrd:[1,0,0,"-"]},"ocrd.cli":{run:[2,0,0,"-"]},"ocrd.model":{ocrd_exif:[3,0,0,"-"],ocrd_file:[3,0,0,"-"],ocrd_mets:[3,0,0,"-"],ocrd_page:[3,0,0,"-"],ocrd_page_textline:[3,0,0,"-"],ocrd_page_textregion:[3,0,0,"-"],ocrd_xml_base:[3,0,0,"-"]},"ocrd.model.ocrd_exif":{OcrdExif:[3,1,1,""]},"ocrd.model.ocrd_exif.OcrdExif":{from_filename:[3,2,1,""],to_xml:[3,3,1,""]},"ocrd.model.ocrd_file":{OcrdFile:[3,1,1,""]},"ocrd.model.ocrd_file.OcrdFile":{ID:[3,4,1,""],basename:[3,4,1,""],basename_without_extension:[3,4,1,""],groupId:[3,4,1,""],mimetype:[3,4,1,""],url:[3,4,1,""]},"ocrd.model.ocrd_mets":{OcrdMets:[3,1,1,""]},"ocrd.model.ocrd_mets.OcrdMets":{add_file:[3,3,1,""],add_file_group:[3,3,1,""],file_by_id:[3,4,1,""],file_groups:[3,4,1,""],find_files:[3,3,1,""],unique_identifier:[3,4,1,""]},"ocrd.model.ocrd_page":{OcrdPage:[3,1,1,""]},"ocrd.model.ocrd_page.OcrdPage":{add_reading_order_ref:[3,3,1,""],add_textline:[3,3,1,""],add_textregion:[3,3,1,""],from_file:[3,2,1,""],get_textline:[3,3,1,""],get_textregion:[3,3,1,""],imageCompression:[3,4,1,""],imageFileName:[3,4,1,""],imageHeight:[3,4,1,""],imagePhotometricInterpretation:[3,4,1,""],imageResolutionUnit:[3,4,1,""],imageWidth:[3,4,1,""],imageXResolution:[3,4,1,""],imageYResolution:[3,4,1,""],list_textlines:[3,3,1,""],list_textregions:[3,3,1,""],page:[3,4,1,""],pcGtsId:[3,4,1,""]},"ocrd.model.ocrd_page_textline":{OcrdPageTextLine:[3,1,1,""]},"ocrd.model.ocrd_page_textline.OcrdPageTextLine":{ID:[3,4,1,""],coords:[3,4,1,""],create:[3,2,1,""],textequiv:[3,4,1,""]},"ocrd.model.ocrd_page_textregion":{OcrdPageTextRegion:[3,1,1,""]},"ocrd.model.ocrd_page_textregion.OcrdPageTextRegion":{ID:[3,4,1,""],add_textline:[3,3,1,""],coords:[3,4,1,""],create:[3,2,1,""],get_textline:[3,3,1,""],list_textlines:[3,3,1,""]},"ocrd.model.ocrd_xml_base":{OcrdXmlDocument:[3,1,1,""],OcrdXmlFragment:[3,1,1,""],get_coords:[3,5,1,""],set_coords:[3,5,1,""]},"ocrd.model.ocrd_xml_base.OcrdXmlDocument":{to_xml:[3,3,1,""]},"ocrd.processor":{base:[4,0,0,"-"],recognize:[5,0,0,"-"],segment_line:[6,0,0,"-"],segment_region:[7,0,0,"-"]},"ocrd.processor.base":{Processor:[4,1,1,""],run_processor:[4,5,1,""]},"ocrd.processor.base.Processor":{add_output_file:[4,3,1,""],input_files:[4,4,1,""],process:[4,3,1,""],verify:[4,3,1,""]},"ocrd.processor.recognize":{tesserocr:[5,0,0,"-"]},"ocrd.processor.recognize.tesserocr":{Tesseract3Recognizer:[5,1,1,""]},"ocrd.processor.recognize.tesserocr.Tesseract3Recognizer":{process:[5,3,1,""]},"ocrd.processor.segment_line":{tesserocr:[6,0,0,"-"]},"ocrd.processor.segment_line.tesserocr":{Tesseract3LineSegmenter:[6,1,1,""]},"ocrd.processor.segment_line.tesserocr.Tesseract3LineSegmenter":{process:[6,3,1,""]},"ocrd.processor.segment_region":{tesserocr:[7,0,0,"-"]},"ocrd.processor.segment_region.tesserocr":{Tesseract3RegionSegmenter:[7,1,1,""]},"ocrd.processor.segment_region.tesserocr.Tesseract3RegionSegmenter":{process:[7,3,1,""]},"ocrd.resolver":{Resolver:[1,1,1,""]},"ocrd.resolver.Resolver":{create_workspace:[1,3,1,""],download_to_directory:[1,3,1,""]},"ocrd.resolver_cache":{ResolverCache:[1,1,1,""]},"ocrd.resolver_cache.ResolverCache":{get:[1,3,1,""],put:[1,3,1,""]},"ocrd.utils":{coordinate_string_from_xywh:[1,5,1,""],getLogger:[1,5,1,""],mets_file_id:[1,5,1,""],safe_filename:[1,5,1,""],xmllint_format:[1,5,1,""],xywh_from_coordinate_string:[1,5,1,""]},"ocrd.validator":{ValidationReport:[1,1,1,""],Validator:[1,1,1,""]},"ocrd.validator.ValidationReport":{add_error:[1,3,1,""],add_warning:[1,3,1,""],is_valid:[1,4,1,""],to_xml:[1,3,1,""]},"ocrd.validator.Validator":{validate:[1,2,1,""],validate_all:[1,3,1,""]},"ocrd.webservice":{processor:[8,0,0,"-"],repository:[8,0,0,"-"]},"ocrd.webservice.processor":{create:[8,5,1,""]},"ocrd.webservice.repository":{create:[8,5,1,""]},"ocrd.workspace":{Workspace:[1,1,1,""]},"ocrd.workspace.Workspace":{add_file:[1,3,1,""],download_file:[1,3,1,""],download_files_in_group:[1,3,1,""],download_url:[1,3,1,""],persist:[1,3,1,""],resolve_image_as_pil:[1,3,1,""],resolve_image_exif:[1,3,1,""],save_mets:[1,3,1,""]},ocrd:{cli:[2,0,0,"-"],constants:[1,0,0,"-"],model:[3,0,0,"-"],processor:[4,0,0,"-"],resolver:[1,0,0,"-"],resolver_cache:[1,0,0,"-"],utils:[1,0,0,"-"],validator:[1,0,0,"-"],webservice:[8,0,0,"-"],workspace:[1,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","staticmethod","Python static method"],"3":["py","method","Python method"],"4":["py","attribute","Python attribute"],"5":["py","function","Python function"]},objtypes:{"0":"py:module","1":"py:class","2":"py:staticmethod","3":"py:method","4":"py:attribute","5":"py:function"},terms:{"boolean":1,"class":[1,3,4,5,6,7],"new":3,"return":[1,3],"static":[1,3],"true":1,The:[1,3],USE:3,about:1,access:1,accordingli:1,add:[1,3,4],add_error:1,add_fil:[1,3],add_file_group:3,add_output_fil:4,add_reading_order_ref:3,add_textlin:3,add_textregion:3,add_warn:1,against:1,algorithm:4,all:1,alnum:1,api:9,arg:[1,3],around:1,assum:1,base:[0,1,3,5,6,7],base_url:8,basenam:[1,3,4],basename_without_extens:3,bound:[1,3],box:[1,3],cach:1,cache_directori:1,cache_en:1,charact:1,character:[],cli:[0,1],compat:1,constant:0,construct:1,contain:1,content:[0,9],coord:[1,3],coordin:1,coordinate_string_from_xywh:1,copi:1,creat:[1,3,4,8],create_workspac:1,current:1,cut:1,data:1,defin:4,deleg:1,describ:1,dict:1,directori:1,disk:1,doing:1,download:1,download_fil:1,download_files_in_group:1,download_to_directori:1,download_url:1,element:3,ensur:[],error:1,exif:1,exifprocessor:[],exist:1,extract:[],fals:[1,3],file:[1,3,4],file_by_id:3,file_group:3,filegrp:[1,3],filenam:[1,3],files_in_group:[],find_fil:3,flocat:3,from:[1,3],from_fil:3,from_filenam:3,fulfil:4,get:[1,3],get_coord:3,get_textlin:3,get_textregion:3,getlogg:1,given:1,group:1,groupid:3,grp:1,handl:1,http:8,imag:[1,3],image_url:1,imagecompress:3,imagefilenam:3,imageheight:3,imagephotometricinterpret:3,imageresolutionunit:3,imagewidth:3,imagexresolut:3,imageyresolut:3,index:[3,9],input:[4,5,6,7],input_fil:4,inputgrp:[4,5,6,7],instanc:[1,3],instead:1,interfac:1,is_valid:1,kei:1,know:1,kwarg:[1,3,4],last:1,line:6,list:[1,3,4],list_textlin:3,list_textregion:3,local:1,local_filenam:[1,3],localhost:8,manag:1,merge_ocr_txt:[0,1],met:[1,3,4],meta:[],metadata:[1,3],mets_file_id:1,mets_url:[1,4],mimetyp:3,model:[0,1],modul:[0,9],msg:1,name:1,none:[1,3,4,5,6,7],numpi:1,object:[1,3,4],ocr:1,ocrd:9,ocrd_exif:[0,1],ocrd_fil:[0,1],ocrd_met:[0,1],ocrd_pag:[0,1],ocrd_page_textlin:[0,1],ocrd_page_textregion:[0,1],ocrd_xml_bas:[0,1],ocrdexif:[1,3],ocrdfil:[1,3],ocrdmet:[1,3],ocrdpag:3,ocrdpagetextlin:3,ocrdpagetextregion:3,ocrdxmldocu:3,ocrdxmlfrag:3,onli:[],option:[1,4],out:1,output:[1,4,5,6,7],outputgrp:[4,5,6,7],overrid:1,overwrit:1,packag:[0,9],page:[1,3,9],paramet:[1,3,4,5,6,7],part:1,pass:1,pcgtsid:3,perform:[5,6,7],persist:1,pil:1,point:1,polygon:1,prefer_symlink:1,process:[4,5,6,7],processor:[0,1],prop:3,put:1,pyocrd:[1,8],readingord:3,recogn:[1,4],recognit:5,rectangl:1,reduc:1,region:[1,3,7],region_ref:3,report:1,repositori:[0,1],repres:3,represent:1,requir:4,resolv:[0,4],resolve_image_as_pil:1,resolve_image_exif:1,resolver_cach:0,resolvercach:1,root:3,run:[0,1,4],run_processor:4,safe_filenam:1,save_met:1,search:9,section:1,see:1,segment:[1,6,7],segment_lin:[1,4],segment_region:[1,4],self:1,set:1,set_coord:3,she:1,sourc:[1,3,4,5,6,7,8],spec:1,state:1,store:1,string:[1,3],subdir:1,subdirectori:1,submodul:0,subpackag:0,symlink:1,technic:3,temporari:1,tesseract3linesegment:6,tesseract3recogn:5,tesseract3regionsegment:7,tesserocr:[1,4],text:5,textequiv:3,textlin:3,textregion:3,therein:4,think:1,through:4,tmp:[1,8],to_xml:[1,3],unique_identifi:3,upload:[1,8],upload_fold:8,url:[1,3],use:[1,3],user:1,using:1,util:0,valid:0,validate_al:1,validationreport:1,verifi:4,warn:1,webservic:[0,1],well:4,what:1,where:1,whether:1,within:1,workspac:[0,3,4,5,6,7],write:1,xml:[1,3,4],xmllint:3,xmllint_format:1,xywh_from_coordinate_str:1},titles:["ocrd","ocrd package","ocrd.cli package","ocrd.model package","ocrd.processor package","ocrd.processor.recognize package","ocrd.processor.segment_line package","ocrd.processor.segment_region package","ocrd.webservice package","Welcome to pyocrd\u2019s documentation!"],titleterms:{base:4,character:[],cli:2,constant:1,content:[1,2,3,4,5,6,7,8],document:9,exif:[],indic:9,merge_ocr_txt:2,model:3,modul:[1,2,3,4,5,6,7,8],ocrd:[0,1,2,3,4,5,6,7,8],ocrd_exif:3,ocrd_fil:3,ocrd_met:3,ocrd_pag:3,ocrd_page_textlin:3,ocrd_page_textregion:3,ocrd_xml_bas:3,packag:[1,2,3,4,5,6,7,8],processor:[4,5,6,7,8],pyocrd:9,recogn:5,repositori:8,resolv:1,resolver_cach:1,run:2,segment_lin:6,segment_region:7,submodul:[1,2,3,4,5,6,7,8],subpackag:[1,4],tabl:9,tesserocr:[5,6,7],util:1,valid:1,webservic:8,welcom:9,workspac:1}})