<dl>

    <dt><a href="#StudyPlanResolver">StudyPlanResolver</a></dt>
    <dd>
        <p>This is the studyplan resolver.  It returns a dummy object.</p>
    </dd>
    <dt><a href="#GoogleBooksService">GoogleBooksService</a></dt>
    <dd>
        <p>This is some google books service thing</p>
    </dd>

</dl>



<a name="StudyPlanResolver"></a>

## StudyPlanResolver
This is the studyplan resolver.  It returns a dummy object.





### constructor()

### resolve(route, state)
Resolves the data

| Param | Type | Description |
| --- | --- | --- |
| route | <code>ActivatedRouteSnapshot</code> | 
| state | <code>RouterStateSnapshot</code> | 



---


<a name="GoogleBooksService"></a>

## GoogleBooksService
This is some google books service thing




| Variables | Type | Description |
| --- | --- | --- |
| API_PATH | <code>string</code> | a private variable of some sort
| http | <code>Http</code> | 

### constructor(http)
| Param | Type | Description |
| --- | --- | --- |
| http | <code>Http</code> | 

### retrieveBook(volumeId)
how the heck

| Param | Type | Description |
| --- | --- | --- |
| volumeId | <code>string</code> | please work


### searchBooks(query)
let's you search books 2

| Param | Type | Description |
| --- | --- | --- |
| query | <code>string</code> | the query title




---


