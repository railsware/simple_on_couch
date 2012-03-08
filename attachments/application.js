$(function(){
  var db = $.couch.db('simple_on_couch');
  db.view("app/count_of_documents", {
    success: function(data){
      if (data.rows.length > 0) $('#countOfDocuments').text(data.rows[0].value);
    }
  });
});