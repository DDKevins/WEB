# MarkDown Grammar


-------------------------------------
## Header
There's 6 Level of Header.

	# h1
	## h2
	### h3
	#### h4
	##### h5
	###### h6

-------------------------------------
## 줄바꿈

문장 마지막에서 띄어쓰기 3번

	첫번 째 문장(띄어쓰기 3번)   
	두번 째 문장

-------------------------------------
## 문단 나눔

줄바꿈(Enter) 두 번

	(enter)
	
요렇게

-------------------------------------
## BlockQuote

> This is a first blockqute.
>	> This is a second blockqute.
>	>	> This is a third blockqute.

-------------------------------------
## List
### Ordered List
1. First
2. Second
3. Third


### UnOrdered List
* '*'
	+ '+'
		- '-'

-------------------------------------
## Link
### 1. 참조 링크
```
[link keyword][id]

[id]: URL "Optional Title here"

// code
Link: [Google][googlelink]

[googlelink]: https://google.com "Go google"
```


### 2. 외부 링크
```
사용문법: [Title](link)
적용예: [Google](https://google.com, "google link")
```
Link: [Google](https://google.com, "google link")

-------------------------------------
## Code


### 1. 들여쓰기

4개의 띄어쓰기 or 하나의 탭으로 된 들여쓰기를 만나면, 들여쓰지 않은 행을 만날 때 까지 변환

ex)


This is a normal paragraph:

    This is a code block.
    
end code block.


### 2. 코드블럭
#### 2-1. Using '```'
```java
public class BootSpringBootApplication {
  public static void main(String[] args) {
    System.out.println("Hello, Honeymon");
  }
}
```

#### 2-2 Using <pre><code>{code}</code></pre> : Not Working
<pre>
<code>
	public class BootSpringBootApplication {
	  public static void main(String[] args) {
		System.out.println("Hello, Honeymon");
	  }
	}
</code>
</pre>

-------------------------------------
## 수평선
```
* * *

***

*****

- - -

---------------------------------------
```

---------------------------------------
## 강조
*single asterisks*    
_single underscores_   
**double asterisks**   
__double underscores__   
~~cancelline~~
```
*single asterisks*
_single underscores_
**double asterisks**
__double underscores__
~~cancelline~~
```
