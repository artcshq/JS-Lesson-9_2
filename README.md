# JS-lesson9_2


������ �������:

� ��� ���� ���:

<input id="age" value="30">
let age = document.getElementById('age');
function showUser(surname, name) {
	alert("������������ " + surname + " " + name + ", ��� ������� " + this.value);
}
showUser();


�������� �� ����� ���������� ���������, ������� ����� �������� �� input

�������� ������ � ��������� js �����.



���������, ����� ��� �������� � �� ���� ������ � �������.

�������� ����� � ������ �� GitHub



������� � ����� �������
��� ������� ���:

'use strict'

function hello() {

console.log(this)

}

hello()