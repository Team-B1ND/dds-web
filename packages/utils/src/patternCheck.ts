class PatternCheck {
  private validate(pattern: RegExp, value: string): boolean {
    return pattern.test(value);
  }

  public idCheck(item: string): boolean {
    const pattern = /^[a-z][a-z0-9]{3,19}$/;
    return this.validate(pattern, item);
  }

  public pwCheck(value: string): boolean {
    const pattern = /^[a-zA-Z0-9!@#$%^*+=-]{7,20}$/;
    return this.validate(pattern, value);
  }

  public emailCheck(item: string): boolean {
    const pattern =
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    return this.validate(pattern, item);
  }

  public phoneCheck(item: string): boolean {
    const pattern = /^\d{2,3}\d{3,4}\d{4}$/;
    return this.validate(pattern, item);
  }
}

export default new PatternCheck();
