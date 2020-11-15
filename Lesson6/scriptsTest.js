{
  "use strict";
  
  describe('Js Inheritance', function() {
    describe('#String.filter()', function() {
      it('shall return "This house is nice!" when input is "This house is not nice!"', ()=>{
        const str = "This house is not nice!";

        assert.equal("This house is nice!", str.filter("not"));
      });
    });

    describe('#Array.bubbleSort()', function() {
      it('shall return [-2, 0, 1, 3, 4, 6] when input is [6,4,0, 3,-2,1]', ()=>{
        const arr = [6, 4, 0, 3, -2, 1];
        const expected = [-2, 0, 1, 3, 4, 6];
        const ar = arr.bubbleSort();
        assert.deepEqual(expected, ar);
      });
    });

    describe('#Teacher.teach()', function() {
      it('shall return "Adam is now teaching Inheritance" when input is Adam and Inheritance', ()=>{
        const teacher = new Teacher();
        teacher.initialize("Adam", 40);
        assert.equal("Adam is Teaching Inheritance", teacher.teach('Inheritance'));
      });
    });


    describe('#Student.learn()', function() {
      it('shall return "Adam just learned Inheritance" when input is Adam and Inheritance', ()=>{
        const student = new Student();
        student.initialize("Adam", 20);
        assert.equal("Adam just learned Inheritance", student.learn('Inheritance'));
      });
    });

  });
};