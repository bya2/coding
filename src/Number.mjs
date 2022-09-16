export class NumberWithBinary {
  static 토너먼트에서만나는라운드(n, a, b) {
    let i;
    for (i = 0; a !== b; ++i) {
      a = Math.ceil(a / 2);
      b = Math.ceil(b / 2);
    }
    return i;
  }

  // 이진수에서 1의 개수
  static numberOfBinaryOne(number) {
    return number.toString(2).match(/1/g).length;
  }

  // 이진수에서 1의 개수가 같은 다음 큰 수
  static nextBigNumberInSameOnes(number) {
    let shiftCount = 0,
      currOnes = 0;
    for (; !(number & 1); ++shiftCount) {
      number = number >> 1;
    }
    for (; number & 1; ++shiftCount, ++currOnes) {
      number = number >> 1;
    }
    for (currOnes--, number++; shiftCount !== currOnes; --shiftCount) {
      number = number << 1;
    }
    for (; shiftCount; shiftCount--, number++) {
      number = number << 1;
    }
    return number;
  }
}

export class CustomNumber {
  // 합이 s고 곱이 최대가 되는 원소의 집합 getter
  setOfMaxMultiForSum = (numberOf, sum) => {
    const d = (sum / numberOf) >> 0;
    if (!d) return [-1];

    const rest = sum % numberOf;
    if (sum !== 1 && rest === 0) return Array.from({ length: numberOf }, () => d);

    const needs = Array(numberOf).fill(d);
    for (let i = 0, len = needs.length; i < rest; ++i) {
      ++needs[len - 1 - i];
    }
    return needs;
  };

  // 1부터 n까지의 합
  static GaussFormula(n, cost = 1) {
    // 가우스의 공식: 1~n의 합: n(n+1)/2
    return (cost * n * (n + 1)) / 2;
  }

  // 두 숫자 사이의 숫자들의 합
  static sumBetweenTwoIntegers(a, b) {
    return ((a + b) * (Math.abs(a - b) + 1)) / 2;
  }

  // 약수 갯수가 홀수인가 짝수인가
  static isOddNumberOfDivisors(n) {
    return Number.isInteger(Math.sqrt(n));
  }

  // 약수 리스트
  getListOfDivisors(n) {
    const HALF = n / 2;
    const list = [];

    for (let i = 1; i < HALF; ++i) {
      if (n % i === 0) {
        list.push(i);
      }
    }

    return [...list, n];
  }

  유클리드호제법GCD(n1, n2) {
    return n1 % n2 === 0 ? n2 : this.유클리드호제법GCD(n2, n1 % n2);
  }

  유클리드호제법LCM(n1, n2) {
    return (n1 * n2) / this.유클리드호제법GCD(n1, n2);
  }

  유클리드호제법(x, y) {
    const gcd = (a, b) => (a % b === 0 ? b : gcd(b, a % b));
    const lcm = (a, b) => (a * b) / gcd(a, b);
    return [gcd(x, y), lcm(x, y)];
  }

  GCD(...numbers) {
    return numbers.reduce((a, b) => this.유클리드호제법LCM(a, b));
  }

  getGCD(a, b) {
    let gcd = 1;

    for (let i = 2; i < Math.min(a, b); ++i) {
      if (a % i === 0 && b % i === 0) {
        gcd = i;
      }
    }

    return gcd;
  }

  getLCM(a, b) {
    let lcm = 1;

    while (true) {
      if (lcm % a == 0 && lcm % b === 0) {
        break;
      }
      lcm++;
    }

    return lcm;
  }
}
