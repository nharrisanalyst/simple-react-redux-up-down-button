x<-c('a','b')
'a'%in%x

allStarList<-list()
allStarList<-lapply(draft_data$player, function(d)
   ifelse(d%in%allStarData$name,1,0)))
   
 allStar<-unlist(allStarList)
   
   View(allStar)
  
allstarFrame<-as.data.frame(allStar)
?data.frame
View(allstarFrame)
draft_data$allStar<-allstarFrame$allStar

hof_list<-lapply(draft_data$player, function(d)
  ifelse(d%in%hof_names$name,1,0))
hof_column<-unlist(hof_list)
hof_data_frame<-as.data.frame(hof_column)
