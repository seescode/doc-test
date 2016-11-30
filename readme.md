<dl>

    <dt><a href="#PaginationComponent">PaginationComponent</a></dt>
    <dd>
        <p>higgs pagination ftw</p>
    </dd>
    <dt><a href="#IWhatever">IWhatever</a></dt>
    <dd>
        <p>Whatever this is, is not important.</p>
    </dd>
    <dt><a href="#HourFormatterPipe">HourFormatterPipe</a></dt>
    <dd>
        <p>Formats seconds to hours</p>
    </dd>
    <dt><a href="#StudyPlanResolver">StudyPlanResolver</a></dt>
    <dd>
        <p>This is the studyplan resolver.  It returns a dummy object.</p>
    </dd>
    <dt><a href="#GoogleBooksService">GoogleBooksService</a></dt>
    <dd>
        <p>This is some google books service thing</p>
    </dd>

</dl>



<a name="PaginationComponent"></a>

## PaginationComponent
higgs pagination ftw

**Example**
```html
<higgs-pagination 
	[currentPage]=""
	[numberOfPages]=""
	(next)=""
	(prev)=""
	></higgs-pagination>
```
| Inputs | Type | Description |
| --- | --- | --- |
| currentPage | <code>number</code> | 
| numberOfPages | <code>number[]</code> | 

| Outputs | Type | Description |
| --- | --- | --- |
| next | <code>EventEmitter&lt;Array&lt;number&gt;&gt;</code> | 
| prev | <code>EventEmitter&lt;number[]&gt;</code> | Called when previous is clicked


### constructor()

### ngOnInit()

### someRandomMethod(height, url, abc)
This does something very random and unimportant.

| Param | Type | Description |
| --- | --- | --- |
| height | <code>number</code> | The height value.
| url | <code>string</code> | The url value.
| abc | <code>Array&lt;number&gt;</code> | the abc value




<a name="IWhatever"></a>

## IWhatever
Whatever this is, is not important.




| Variables | Type | Description |
| --- | --- | --- |
| a | <code>number[]</code> | a number array
| b | <code>Array&lt;number&gt;</code> | a number array again



<a name="HourFormatterPipe"></a>

## HourFormatterPipe
Formats seconds to hours





### transform(seconds)
transform it

| Param | Type | Description |
| --- | --- | --- |
| seconds | <code>number</code> | the seconds it takes




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




