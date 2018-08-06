interface Registration {
  dependencies: string[];
  func: () => any;
}

interface Registrations {
  [name: string]: Registration;
}

class DiContainer {
  public static messages = {
    registerRequiresArgs: `이 함수는 인자가 3개('문자열, 문자열 배열, 함수')가 있어야 합니다.`,
  };
  private registrations: Registrations = {};

  public register(name: string, dependencies: string[], func: () => any) {
    if (
      typeof name !== 'string' ||
      !Array.isArray(dependencies) ||
      typeof func !== 'function'
    ) {
      throw new Error(DiContainer.messages.registerRequiresArgs);
    }

    dependencies.forEach(dependency => {
      if (typeof dependency !== 'string') {
        throw new Error(DiContainer.messages.registerRequiresArgs);
      }
    });

    this.registrations[name] = {
      dependencies,
      func,
    };
  }

  public get(name: string): any {
    const registration = this.registrations[name];
    if (registration === undefined) {
      return undefined;
    }
    const dependencies = registration.dependencies.map(dependency =>
      this.get(dependency),
    );
    return registration.func.apply(null, dependencies);
  }
}

export default DiContainer;
